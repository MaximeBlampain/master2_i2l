package com.example.testintent02;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class SecondActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        Intent intent = getIntent();

        String inputTxt = intent.getStringExtra(MainActivity.CLE);

        //get input
        EditText input = findViewById(R.id.txtEditInput);

        input.setText(inputTxt);
    }

    public void onClickValidate(View v){
        //get input
        EditText input = findViewById(R.id.txtEditInput);
        String inputText = input.getText().toString();
        //send new version to mainActivity

        Intent intent = new Intent();
        intent.putExtra(MainActivity.CLE, inputText);
        setResult(RESULT_OK, intent);
        finish();
    }
}