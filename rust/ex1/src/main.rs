//mod loop_until;
//use loop_until::loop_until;

mod fizzbuzz;
use fizzbuzz::fizzbuzz;
use fizzbuzz::fizzbuzzCorrection;
use fizzbuzz::fizzbuzzV2;

// fn ...(n: u8) -> u8 ((Prend un u8 et retourne un u8)

fn maybe_by_two(n: &mut u8) {
    *n = *n * 2

    // return n * 2;
    // ou n*2 en dernière ligne de la fct / condition
}

fn main() {
    /*loop_until(10);
    loop_until(20);
    let mut test = 10;
    let ref_test = &mut test;
    maybe_by_two(ref_test);
    dbg!(test); */

    fizzbuzzV2(100)
}
