use aleo_accounts::{private_key::PrivateKey, qrcode::QRCode};

use rand::thread_rng;

fn main() {
    let rng = &mut thread_rng();
    let private_key = PrivateKey::new(None, rng).unwrap();
    println!("{}", private_key);

    let qr = QRCode::new(&vec![1u8; 20]);
    qr.save_png("qrcode");
    println!("{}", qr);
}