//use std::fmt::{Display, Error, Formatter};

struct CitoyenFR {
    age: u8,
}

struct CitoyenUS {
    age: u8,
}

trait EstUnAdulte {
    fn is_adult(&self) -> bool;
}

impl EstUnAdulte for CitoyenFR {
    fn is_adult(&self) -> bool {
        self.age > 18
    }
}

impl EstUnAdulte for CitoyenUS {
    fn is_adult(&self) -> bool {
        self.age > 21
    }
}

struct DeclareAdulte<P> {
    peut_etre_adulte: P,
}

impl<P> DeclareAdulte<P>
where
    P: EstUnAdulte,
{
    fn declare(&self) {
        if self.peut_etre_adulte.is_adult() {
            println!("est un adulte");
        } else {
            println!("n'est pas un adulte");
        }
    }
}

fn main() {
    let fr: CitoyenFR = CitoyenFR { age: 15 };
    let us = CitoyenUS { age: 25 };

    let p1 = DeclareAdulte {
        peut_etre_adulte: fr,
    };

    let p2 = DeclareAdulte {
        peut_etre_adulte: us,
    };
    p1.declare();
    p2.declare();
    /*if fr.is_adult() {
        println!("fr est un adulte");
    } else {
        println!("fr est mineur");
    }
    if us.is_adult() {
        println!("us est un adulte");
    } else {
        println!("us est mineur")
    }*/
}
