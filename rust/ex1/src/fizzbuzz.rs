/// Fizzbuzz
/// Fizzbuzz(n)

/// Compte jusqu'à n

/// si n est div par 3 -> "fizz"
/// si n est div par 5 -> "buzz"
/// si n est div par 3 && 5 -> "fizzbuzz"
//sinon afficher n

pub fn fizzbuzz(n: u8) {
    for i in 0..=n {
        if i % 3 == 0 && i % 5 == 0 {
            println!("fizzbuzz")
        } else if i % 3 == 0 {
            println!("fizz");
        } else if i % 5 == 0 {
            println!("buzz")
        } else {
            println!("{}", i)
        }
    }
}

// fizzbuzz with match

pub fn fizzbuzzV2(n: u8) {
    for i in 0..=n {
        match i {
            i if i % 3 == 0 && i % 5 == 0 => println!("fizzbuzz"),
            i if i % 5 == 0 => println!("buzz"),
            i if i % 3 == 0 => println!("fizz"),
            _ => println!("{}", i),
        }
    }
}

pub fn fizzbuzzCorrection(n: u8) {
    for i in 0..=n {
        match i % 15 {
            0 => {
                println!("fizzbuzz");
                continue;
            }
            _ => {}
        }

        match i % 5 {
            0 => {
                println!("buzz");
                continue;
            }
            _ => {}
        }

        match i % 3 {
            0 => {
                println!("fizz");
                continue;
            }
            _ => {}
        }

        println!("{}", i)
    }
}
