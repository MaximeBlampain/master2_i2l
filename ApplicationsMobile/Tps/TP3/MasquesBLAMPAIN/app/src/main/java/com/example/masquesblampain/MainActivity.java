package com.example.masquesblampain;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    public final static int EDIT_MAIN = 1;
    public final static int EDIT_ADDRESS = 2;

    public final static String FIRSTNAME = "com.example.masquesblampain.FIRSTNAME";
    public final static String LASTNAME = "com.example.masquesblampain.LASTNAME";
    public final static String PHONE_NUMBER = "com.example.masquesblampain.PHONE_NUMBER";

    public final static String NUMBER_ADDRESS = "com.example.masquesblampain.NUMBER_ADDRESS";
    public final static String STREET_NAME_ADDRESS = "com.example.masquesblampain.STREET_NAME_ADDRESS";
    public final static String POSTAL_CODE_ADDRESS = "com.example.masquesblampain.POSTAL_CODE_ADDRESS";
    public final static String TOWN_ADDRESS = "com.example.masquesblampain.TOWN_ADDRESS";

    private TextView firstName;
    private TextView lastName;
    private TextView phoneNumber;
    private TextView numberAddress;
    private TextView streetName;
    private TextView postalCode;
    private TextView town;

    private String firstName_txt;
    private String lastName_txt;
    private String phoneNumber_txt;
    private String numberAddress_txt;
    private String streetName_txt;
    private String postalCode_txt;
    private String town_txt;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        firstName = findViewById(R.id.firstName);
        lastName = findViewById(R.id.lastName);
        phoneNumber = findViewById(R.id.phoneNumber);
        numberAddress = findViewById(R.id.nbAddress);
        streetName = findViewById(R.id.streetNameAddress);
        postalCode = findViewById(R.id.postalCodeAddress);
        town = findViewById(R.id.townAddress);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        // if canceled, avoid changes
        if(resultCode == RESULT_CANCELED) return;

        if(requestCode == EDIT_MAIN){
            // get modified fields
            String newFirstName = data.getStringExtra(FIRSTNAME);
            String newLastName = data.getStringExtra(LASTNAME);
            String newPhoneNumber = data.getStringExtra(NUMBER_ADDRESS);

            // set modified fields
            firstName.setText(newFirstName);
            lastName.setText(newLastName);
            phoneNumber.setText(newPhoneNumber);

        } else if(requestCode == EDIT_ADDRESS){
            // get modified fields
            String newNumberAddress = data.getStringExtra(NUMBER_ADDRESS);
            String newStreetName = data.getStringExtra(STREET_NAME_ADDRESS);
            String newPostalCode = data.getStringExtra(POSTAL_CODE_ADDRESS);
            String newTown = data.getStringExtra(TOWN_ADDRESS);

            // set modified fields
            numberAddress.setText(newNumberAddress);
            streetName.setText(newStreetName);
            postalCode.setText(newPostalCode);
            town.setText(newTown);
        }
    }

    public void onEditMainInformations(View v){
        // get string contents
        firstName_txt = firstName.getText().toString();
        lastName_txt = lastName.getText().toString();
        phoneNumber_txt = phoneNumber.getText().toString();

        // create intent
        Intent intent = new Intent(this, EditMainInformations.class);

        intent.putExtra(FIRSTNAME, firstName_txt);
        intent.putExtra(LASTNAME, lastName_txt);
        intent.putExtra(PHONE_NUMBER, phoneNumber_txt);

        startActivityForResult(intent, EDIT_MAIN);
    }

    public void onEditAddressInformation(View v){
        // get string contents
        numberAddress_txt = numberAddress.getText().toString();
        streetName_txt = streetName.getText().toString();
        postalCode_txt = postalCode.getText().toString();
        town_txt = town.getText().toString();

        // create intent
        Intent intent = new Intent(this, EditAdressInformations.class);

        intent.putExtra(NUMBER_ADDRESS, numberAddress_txt);
        intent.putExtra(STREET_NAME_ADDRESS, streetName_txt);
        intent.putExtra(POSTAL_CODE_ADDRESS, postalCode_txt);
        intent.putExtra(TOWN_ADDRESS, town_txt);

        startActivityForResult(intent, EDIT_ADDRESS);
    }
}