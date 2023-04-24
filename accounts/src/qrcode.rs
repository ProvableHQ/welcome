use crate::errors::QRCodeError;

use image::Luma;
use qrcode::{render::svg, EcLevel, QrCode, Version};
use std::fmt;

pub struct QRCode {
    data: Vec<u8>,
    width: u32,
    height: u32,
}

impl QRCode {
    pub fn new(data: &[u8]) -> Self {
        Self {
            data: data.to_vec(),
            width: 250,
            height: 250,
        }
    }

    pub fn width(&mut self, width: u32) -> &mut Self {
        self.width = width;
        self
    }

    pub fn height(&mut self, height: u32) -> &mut Self {
        self.height = height;
        self
    }

    pub fn save_png(&self, filename: &str) {
        // Encode some data into bits.
        let code = QrCode::new(&self.to_bytes()).unwrap();

        // Render the bits into an image.
        let image = code.render::<Luma<u8>>().min_dimensions(self.width, self.height).build();

        // Save the image.
        image.save(&format!("./{}.png", filename)).unwrap();
    }

    pub fn to_svg(&self) -> Result<String, QRCodeError> {
        let code = QrCode::with_version(&self.to_bytes(), Version::Micro(2), EcLevel::L)?;
        Ok(code
            .render()
            .min_dimensions(self.width, self.height)
            .dark_color(svg::Color("#800000"))
            .light_color(svg::Color("#ffff80"))
            .build())
    }

    pub fn to_unicode(&self, include_padding: bool) -> Result<String, QRCodeError> {
        let code = QrCode::new(&self.to_bytes())?;
        Ok(code.render::<char>().quiet_zone(include_padding).module_dimensions(2, 1).build())
    }

    pub fn to_bytes(&self) -> Vec<u8> {
        self.data.clone()
    }
}

impl fmt::Display for QRCode {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.to_unicode(true)?)
    }
}
