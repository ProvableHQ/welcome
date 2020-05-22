#[derive(Debug, Error)]
pub enum QRCodeError {
    #[error("{}: {}", _0, _1)]
    Crate(&'static str, String),
}

impl From<qrcode::types::QrError> for QRCodeError {
    fn from(error: qrcode::types::QrError) -> Self {
        QRCodeError::Crate("qrcode", format!("{:?}", error))
    }
}

impl From<QRCodeError> for std::fmt::Error {
    fn from(error: QRCodeError) -> Self {
        panic!("{:?}", error)
    }
}
