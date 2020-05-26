use aleo_accounts::{private_key::PrivateKey, public_key::PublicKey, qrcode::QRCode};

use rand::thread_rng;

fn main() {
    let rng = &mut thread_rng();

    let private_key = PrivateKey::new(None, rng).unwrap();
    println!("\n{}", private_key);

    let public_key = PublicKey::from(&private_key).unwrap();
    println!("\n{}", public_key);

    let qr = QRCode::new(&public_key.to_bytes());
    // let filename = public_key.to_string();
    // qr.save_png(&filename);
    println!("{}", qr);
}
