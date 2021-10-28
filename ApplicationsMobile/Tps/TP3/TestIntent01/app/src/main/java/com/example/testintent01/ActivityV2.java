package com.example.testintent01;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class ActivityV2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = getIntent();

        String txt = intent.getStringExtra(MainActivity.TEXT);

        //get txt on view
        TextView textView = findViewById(R.id.receivedTxtToShow);

        textView.setText(txt);
        setContentView(R.layout.activity_v2);
    }
}