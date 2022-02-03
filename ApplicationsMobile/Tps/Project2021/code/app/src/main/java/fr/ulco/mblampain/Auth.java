package fr.ulco.mblampain;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class Auth extends AppCompatActivity {

    private EditText input_password;
    private TextView error_message;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.password_wall);

        input_password = findViewById(R.id.input_password);
        error_message = findViewById(R.id.txt_error_message);
    }

    public void tryToLogin(View view) {
        if(input_password.getText().toString().equals("perec")){
            Intent intent = new Intent(this, AdminView.class);
            startActivityForResult(intent, 3);
        } else {
            error_message.setText("Mauvais mot de passe !");
        }
    }

    public void cancelLogin(View view) {
        finish();
    }

}
