package com.example.calcblampain;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onExitApp(View view) {
        MainActivity.this.finish();
    }

    public void onExecuteCalculus(View view) {
        // Get the input fields
        EditText inputOne = (EditText) findViewById(R.id.NumberInputOne);
        EditText inputTwo = (EditText) findViewById(R.id.NumberInputTwo);

        String txtInputOne = inputOne.getText().toString();
        String txtInputTwo = inputTwo.getText().toString();

        // Get the checked radio button
        RadioGroup rdioGrpOperations = (RadioGroup) findViewById(R.id.operand_group);

        // Get the result field to display output
        TextView txtResult = (TextView) findViewById(R.id.ResultCalc);

        if(txtInputOne.equals("") || txtInputTwo.equals("")){
            txtResult.setText(getString(R.string.empty_field));
            return;
        }
        int valueOne = Integer.parseInt(inputOne.getText().toString());
        int valueTwo = Integer.parseInt(inputTwo.getText().toString());

        int checkedId = rdioGrpOperations.getCheckedRadioButtonId();

        if(checkedId == -1) txtResult.setText(getString(R.string.no_operator_selected));
        else {
            RadioButton rdioChecked = (RadioButton) findViewById(checkedId);

            // Check the checked type to make calculus
            double finalResult;
            switch (rdioChecked.getText().toString()){
                case "Plus":
                    finalResult = valueOne + valueTwo;
                    txtResult.setText(String.valueOf(finalResult));
                    break;
                case "Moins":
                    finalResult = valueOne - valueTwo;
                    txtResult.setText(String.valueOf(finalResult));
                    break;
                case "Multiplié":
                    finalResult = valueOne * valueTwo;
                    txtResult.setText(String.valueOf(finalResult));
                    break;
                case "Divisé":
                    finalResult = valueOne / valueTwo;
                    txtResult.setText(String.valueOf(finalResult));
                    break;
                default :
                    txtResult.setText(getString(R.string.unknown_operation));
                    break;
            }
        }

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
        TextView txtResult = (TextView) findViewById(R.id.ResultCalc);

        // Reset result field
        txtResult.setText("");
    }
}