package com.example.masquesblampain;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class EditAdressInformations extends AppCompatActivity {

    private EditText numberAddress;
    private EditText streetName;
    private EditText postalCode;
    private EditText town;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit_adress_informations);

        numberAddress = findViewById(R.id.inputEditNumberAdress);
        streetName = findViewById(R.id.inputEditStreetNameAdress);
        postalCode = findViewById(R.id.inputEditPostalCodeAddress);
        town = findViewById(R.id.inputEditTownAddress);

        // get intent fields
        Intent intent = getIntent();

        String numberAddress_txt = intent.getStringExtra(MainActivity.NUMBER_ADDRESS);
        String streetName_txt = intent.getStringExtra(MainActivity.STREET_NAME_ADDRESS);
        String postalCode_txt = intent.getStringExtra(MainActivity.POSTAL_CODE_ADDRESS);
        String town_txt = intent.getStringExtra(MainActivity.TOWN_ADDRESS);

        // set fields with actual value
        numberAddress.setText(numberAddress_txt);
        streetName.setText(streetName_txt);
        postalCode.setText(postalCode_txt);
        town.setText(town_txt);
    }

    public void onCancelChanges(View v){
        Intent response = new Intent();
        setResult(RESULT_CANCELED, response);
        finish();
    }

    public void onValidateChanges(View v){
        String numberAddress_txt = numberAddress.getText().toString();
        String streetName_txt = streetName.getText().toString();
        String postalCode_txt = postalCode.getText().toString();
        String town_txt = town.getText().toString();

        Intent response = new Intent();

        response.putExtra(MainActivity.NUMBER_ADDRESS, numberAddress_txt);
        response.putExtra(MainActivity.STREET_NAME_ADDRESS, streetName_txt);
        response.putExtra(MainActivity.POSTAL_CODE_ADDRESS, postalCode_txt);
        response.putExtra(MainActivity.TOWN_ADDRESS, town_txt);

        setResult(RESULT_OK,response);
        finish();
    }
}