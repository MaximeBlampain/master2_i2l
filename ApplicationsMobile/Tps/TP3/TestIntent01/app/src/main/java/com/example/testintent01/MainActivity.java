package com.example.testintent01;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends Activity {

    public static final String TEXT = "com.example.testintent01.TEXT";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onClickSendTxt(View view){
        // get input
        EditText input = findViewById(R.id.textToSend);

        String txt_input = input.getText().toString();

        // set txtToShow

        //TextView txtToShow = findViewById(R.id.ShowText);

        //txtToShow.setText(txt_input);

        Intent intent = new Intent(this, ActivityV2.class);

        intent.putExtra(TEXT, txt_input);

        startActivity(intent);
    }
}