package com.example.masquesblampain;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class EditMainInformations extends AppCompatActivity {

    private EditText firstName;
    private EditText lastName;
    private EditText phoneNumber;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit_main_informations);

        firstName = findViewById(R.id.inputEditName);
        lastName = findViewById(R.id.inputEditLastName);
        phoneNumber = findViewById(R.id.inputEditPhoneNumber);

        // get intent fields
        Intent intent = getIntent();

        String txt_firstName = intent.getStringExtra(MainActivity.FIRSTNAME);
        String txt_lastName = intent.getStringExtra(MainActivity.LASTNAME);
        String txt_phoneNumber = intent.getStringExtra(MainActivity.PHONE_NUMBER);

        // set fields with actual value
        firstName.setText(txt_firstName);
        lastName.setText(txt_lastName);
        phoneNumber.setText(txt_phoneNumber);
    }

    public void onCancelChanges(View v){
        Intent response = new Intent();
        setResult(RESULT_CANCELED, response);
        finish();
    }

    public void onValidateChanges(View v){
        String firstName_txt = firstName.getText().toString();
        String lastName_txt = lastName.getText().toString();
        String phoneNumber_txt = phoneNumber.getText().toString();

        Intent response = new Intent();

        response.putExtra(MainActivity.FIRSTNAME, firstName_txt);
        response.putExtra(MainActivity.LASTNAME, lastName_txt);
        response.putExtra(MainActivity.NUMBER_ADDRESS, phoneNumber_txt);

        setResult(RESULT_OK, response);
        finish();
    }
}