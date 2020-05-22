use crate::{errors::PublicKeyError, private_key::PrivateKey};

use snarkos_dpc::base_dpc::{instantiated::Components, parameters::PublicParameters};
use snarkos_objects::AccountPublicKey;
use snarkos_utilities::bytes::ToBytes;

use std::fmt;

pub struct PublicKey {
    public_key: AccountPublicKey<Components>,
}

impl PublicKey {
    pub fn from(private_key: &PrivateKey) -> Result<Self, PublicKeyError> {
        let mut parameters_path = std::env::current_dir()?;
        parameters_path.push("../snarkos/dpc/src/parameters/");
        let parameters = PublicParameters::<Components>::load(&parameters_path, true)?;

        let public_key = AccountPublicKey::<Components>::from(parameters.account_commitment_parameters(), private_key.to_inner_ref())?;

        Ok(Self { public_key })
    }

    pub fn to_bytes(&self) -> Vec<u8> {
        let mut output = vec![];
        self.public_key.write(&mut output).expect("serialization to bytes failed");
        output
    }
}

impl fmt::Display for PublicKey {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.public_key.to_string())
    }
}
