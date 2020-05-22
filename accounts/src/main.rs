use aleo_accounts::qrcode::QRCode;

fn main() {
    let qr = QRCode::new(&vec![1u8; 20]);
    qr.save_png("qrcode");
    println!("{}", qr);
}