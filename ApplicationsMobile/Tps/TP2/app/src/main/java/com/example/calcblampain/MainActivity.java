package com.example.calcblampain;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    String calculus = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onExitApp(View view) {
    }

    public void onExecuteCalculus(View view) {
    }

    public void onResetCalculus(View view) {
        // Get input One and Two items
        EditText inputOne = (EditText) findViewById(R.id.NumberInputOne);
        EditText inputTwo = (EditText) findViewById(R.id.NumberInputTwo);

        // Reset input One and Two
        inputOne.setText(null);
        inputTwo.setText(null);

        // Get all radio buttons
        RadioButton radioPlus = (RadioButton) findViewById(R.id.RadioPlus);
        RadioButton radioMoins = (RadioButton) findViewById(R.id.RadioMoins);
        RadioButton radioMultiplier = (RadioButton) findViewById(R.id.RadioMultiplier);
        RadioButton radioDiviser = (RadioButton) findViewById(R.id.RadioDiviser);

        // Reset radio buttons
        radioPlus.setChecked(false);
        radioMoins.setChecked(false);
        radioMultiplier.setChecked(false);
        radioDiviser.setChecked(false);

        // Get result text field
        TextView txtResult = (TextView) findViewById(R.id.ResultLabel);

        // Reset result field
        txtResult.setText("");
    }
}