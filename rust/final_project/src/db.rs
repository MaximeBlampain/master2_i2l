pub mod models;
pub mod schema;

use diesel::prelude::*;
use dotenv::dotenv;
use std::env;

use models::*;
use schema::todos;
use schema::todos::dsl::*;

fn connect() -> SqliteConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");
    SqliteConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}",
                                   database_url))
}

// https://fdeantoni.medium.com/rust-actix-diesel-sqlite-d67a1c3ef0e
pub fn get_user_todos(id_user: String) -> Vec<Todo> {
    let connection = connect();
    todos
        .filter(user_id.eq(id_user))
        .load::<Post>(&connection)
        .expect("Error loading posts")
}