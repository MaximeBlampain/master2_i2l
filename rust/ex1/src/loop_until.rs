// private fn ..... (){}
// public pub fn .......() {}
// public dans le projet seulement pub(crate) fn .....() {}

pub fn loop_until(n: u8) {
    for i in 0..=n {
        dbg!(i);
    }
}
