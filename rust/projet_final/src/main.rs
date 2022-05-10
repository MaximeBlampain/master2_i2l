#[macro_use]
extern crate rocket;
#[macro_use]
extern crate serde;
extern crate rocket_dyn_templates;
extern crate rusqlite;
extern crate serde_json;

use reqwest;
use rocket_dyn_templates::Template;
use rusqlite::{Connection, Result};
use std::collections::HashMap;

#[derive(Serialize)]
struct TemplateContextIndex {
}

#[derive(Serialize)]
struct TemplateContextLeague {
    items: LeaguesByCountry,
}

#[derive(Serialize)]
struct TemplateContextScorers {
    items: TopScorers
}

#[derive(Debug)]
struct Link {
    id: i32,
    link: String,
    title: String,
    description: String,
}
/**
Struc LeagueByCountry
*/
#[derive(Deserialize, Debug, Serialize)]
struct League {
    id: i32,
    name: String,
    logo: String,
}

#[derive(Deserialize, Debug, Serialize)]
struct Country {
    name: String,
    code: String,
    flag: String,
}

#[derive(Deserialize, Debug, Serialize)]
struct Season {
    year: i64,
    start: String,
    end: String,
    current: bool,
}

#[derive(Deserialize, Debug, Serialize)]
struct Response {
    league: League,
    country: Country,
    seasons: Vec<Season>,
}

#[derive(Deserialize, Debug,Serialize)]
struct LeaguesByCountry {
    response: Vec<Response>,
}

/**
Struct TopScorers
*/

#[derive(Deserialize, Debug,Serialize)]
struct Goals {
    total: i64,
}

#[derive(Deserialize, Debug,Serialize)]
struct Statistics {
    goals: Goals
}

#[derive(Deserialize, Debug,Serialize)]
struct Player {
    age:i64,
    firstname:String,
    lastname:String,
    photo:String
}

#[derive(Deserialize, Debug,Serialize)]
struct Response2 {
    player: Player,
    statistics:Vec<Statistics>
}

#[derive(Deserialize, Debug,Serialize)]
struct TopScorers {
    response:Vec<Response2>
}

#[get("/")]
async fn index() -> Template {
    let context = TemplateContextIndex {
    };
    Template::render("index", &context)
}

#[get("/db")]
pub fn db() -> Template {
    let conn = Connection::open("database/db.sqlite").unwrap();

    let mut stmt = conn.prepare("SELECT id, link, title, description FROM links").unwrap();
    let links = stmt.query_map(&[], |row| {
        Link {
            id: row.get(0),
            link: row.get(1),
            title: row.get(2),
            description: row.get(3)
        }
    }).unwrap();

    for link in links {
        dbg!(link);
    }

    let context = TemplateContextIndex { };
    Template::render("db", &context)
}


#[get("/league/<pays>")]
async fn league(pays:String) -> Template {

    let client = reqwest::Client::new();
    let params = [("country", pays)];
    let res = client
        .get("https://api-football-v1.p.rapidapi.com/v3/leagues")
        .header("x-rapidapi-host", "api-football-v1.p.rapidapi.com")
        .header(
            "x-rapidapi-key",
            "6ad3dcf36emsh2140637c6a4374cp1d5ee9jsnabd610286cbe",
        )
        .query(&params)
        // confirm the request using send()
        .send()
        .await
        // the rest is the same!
        .unwrap()
        .json::<LeaguesByCountry>()
        .await
        .unwrap();

    let context = TemplateContextLeague {
        items: res,
    };
    Template::render("league", &context)
}

#[get("/scorer/<id>")]
async fn scorer(id:i32) -> Template {

    let annee = 2021;
    let client = reqwest::Client::new();
    let params = [("league",id),("season", annee)];
    let res = client
        .get("https://api-football-v1.p.rapidapi.com/v3/players/topscorers")
        .header("x-rapidapi-host", "api-football-v1.p.rapidapi.com")
        .header(
            "x-rapidapi-key",
            "6ad3dcf36emsh2140637c6a4374cp1d5ee9jsnabd610286cbe",
        )
        .query(&params)
        .send()
        .await
        .unwrap()
        .json::<TopScorers>()
        .await
        .unwrap();

    let context = TemplateContextScorers {
        items:res
    };
    Template::render("scorer", &context)
}


#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index,league,scorer,db])
        .attach(Template::fairing())
}
