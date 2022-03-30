use super::schema::todos;

#[derive(Queryable, Serialize)]
pub struct Todo {
  pub id: i32,
  user_id: String,
  title: String,
  description: String,
}

#[derive(Insertable)]
#[table_name = "todos"]
pub struct NewTodo<'a> {
  pub id: i32,
  pub user_id: &'a str,
  pub title: &'a str,
  pub description: &'a str,
}