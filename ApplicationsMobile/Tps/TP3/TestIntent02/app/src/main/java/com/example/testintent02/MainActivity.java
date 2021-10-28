package com.example.testintent02;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    public final static String CLE = "com.example.testintent02.TXT";
    public final static int CODE = 4;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);
    }

    public void onClickEdit(View view){
        TextView txtToEdit = findViewById(R.id.basicText);

        String txt_txtToEdit = txtToEdit.getText().toString();

        Intent intent = new Intent(this, SecondActivity.class);

        intent.putExtra(CLE, txt_txtToEdit);
        startActivityForResult(intent, CODE);
    }

    protected void onActivityResult (int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        String finalTxt = data.getStringExtra(CLE);

        TextView txtToEdit = findViewById(R.id.basicText);

        txtToEdit.setText(finalTxt);
    }
}