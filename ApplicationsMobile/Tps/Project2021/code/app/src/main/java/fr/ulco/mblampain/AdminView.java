package fr.ulco.mblampain;

import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.text.Normalizer;

public class AdminView  extends AppCompatActivity {

    private EditText input_new_palindrome;
    private TextView txt_error;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.admin_view);

        input_new_palindrome = findViewById(R.id.input_newPalindrome);
        txt_error = findViewById(R.id.txt_adm_error_message);

    }

    public void addToPalindromes(View view) {
        String newPalindrome = input_new_palindrome.getText().toString();
        if(isPalindrome(newPalindrome)) {
            addToFile(newPalindrome, "palindromes.txt");
        } else {
            txt_error.setText("ERREUR");
        }
    }

    public void addToMaybePalindromes(View view) {
        String newPalindrome = input_new_palindrome.getText().toString();
        if(!newPalindrome.equals("")){
            addToFile(newPalindrome, "nonpalindromes.txt");
        }
    }

    private void addToFile(String str, String filename) {
        // Finalement on ne peut pas ajouter dans le fichier assets, donc je ne peux pas ajouter la phrase
    }
    private boolean isPalindrome(String str) {
        if(str.equals("")) return false;

        String normalized = Normalizer.normalize(str, Normalizer.Form.NFD);
        // Remove accents
        normalized = normalized.replaceAll("[\\p{InCombiningDiacriticalMarks}]", "");
        // Remove non letter characters
        normalized = normalized.replaceAll("[^a-zA-Z]", "");
        // Put string in lower case
        normalized = normalized.toLowerCase();

        int begin = 0;
        int end = normalized.length() -1;

        while(end > begin) {
            char beginChar = normalized.charAt(begin);
            char endChar = normalized.charAt(end);
            if(beginChar != endChar) return false;

            begin++;
            end--;
        }

        return true;
    }

}
