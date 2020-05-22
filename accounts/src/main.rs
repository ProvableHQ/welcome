
use qrcode::QrCode;

fn main() {
    let code = QrCode::new(b"Hello").unwrap();
    let string = code.render::<char>().quiet_zone(true).module_dimensions(2, 1).build();
    println!("{}", string);
}