fn try_something(will_succeed: bool) -> Result<u8, String> {
    match will_succeed {
        true => Ok(42),
        false => Err("mon pote".to_string()),
    }
}

fn double_it(number: u8) -> Option<u8> {
    number.checked_mul(2)
}

fn say_sorry(message: String) -> String {
    format!("desole {}", message)
}

fn run(will_succeed: bool) -> Result<Option<u8>, String> {
    /*
    Original
    match try_something(will_succeed) {
        Ok(n) => Ok(double_it(n)),
        Err(e) => Err(say_sorry(e)),
    }
     */
    // Currying
    try_something(will_succeed)
        .map(double_it)
        .map_err(say_sorry)
}

#[test]
fn mon_test_good() {
    // setup
    let initial = true;
    let expected = Ok(Some(84));

    let actual = run(initial);

    assert_eq!(expected, actual);
}

#[test]
fn mon_test_bad() {
    // setup
    let initial = false;
    let expected = Err("desole mon pote".to_string());

    // run
    let actual = run(initial);

    assert_eq!(expected, actual);
}
