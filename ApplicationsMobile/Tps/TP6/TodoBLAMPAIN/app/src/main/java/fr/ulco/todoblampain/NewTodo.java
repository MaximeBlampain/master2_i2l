package fr.ulco.todoblampain;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

public class NewTodo extends AppCompatActivity {

    private  EditText textTodo;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.new_todo);
        Intent intention = getIntent();
        textTodo = (EditText) findViewById(R.id.txtTodo);
    }

    public void addTodo(View view) {
        Intent resultat = new Intent();
        resultat.putExtra(MainActivity.Ref,textTodo.getText().toString());

        setResult(RESULT_OK, resultat);
        finish();
    }


    public void cancel(View view) {
        finish();
    }
}
