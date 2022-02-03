package fr.ulco.mblampain;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.DialogFragment;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.os.Handler;
import android.text.SpannableString;
import android.text.Spanned;
import android.text.style.BackgroundColorSpan;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import com.google.android.material.snackbar.Snackbar;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.text.Normalizer;
import java.util.ArrayList;
import java.util.Random;

public class MainActivity extends AppCompatActivity {

    private EditText inputPalindrome;
    private TextView cleanedPalindrome;
    private TextView reversedPalindrome;
    private int iLoop;

    private static SpannableString styled_reversed;
    private static SpannableString styled_cleaned;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        inputPalindrome = findViewById(R.id.input_palindrome);
        cleanedPalindrome = findViewById(R.id.txt_palindrome);
        reversedPalindrome = findViewById(R.id.txt_reverse_palindrome);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        switch(id){
            case R.id.randomPalindrome:
                try {
                    inputPalindrome.setText(getRandomPalindrome());
                } catch (IOException e) {
                    e.printStackTrace();
                }
                return true;
            case R.id.maybePalindrome:
                try {
                    inputPalindrome.setText(getRandomMaybePalindrome());
                } catch (IOException e) {
                    e.printStackTrace();
                }
                return true;
            case R.id.perecPalindrome:
            case R.id.seePerecPalindrome:
                DialogFragment fragment = new UnavailabledDialog();
                fragment.show(getSupportFragmentManager(), "unavailable");
                return true;
            case R.id.about:
                DialogFragment f = new AboutDialog();
                f.show(getSupportFragmentManager(), "about");
                return true;
            default :
                return super.onOptionsItemSelected(item);
        }
    }

    public void reset(View view) {
        inputPalindrome.setText("");
        cleanedPalindrome.setText("");
        reversedPalindrome.setText("");
    }

    public void clearInput(View view) {
        String str = inputPalindrome.getText().toString();
        if(str.equals("")) return;

        String normalized = Normalizer.normalize(str, Normalizer.Form.NFD);
        // Remove accents
        normalized = normalized.replaceAll("[\\p{InCombiningDiacriticalMarks}]", "");
        // Remove non letter characters
        normalized = normalized.replaceAll("[^a-zA-Z]", "");
        // Put string in lower case
        normalized = normalized.toLowerCase();
        cleanedPalindrome.setText(normalized);
    }

    public void reverseInput(View view) {
        String strToReverse = cleanedPalindrome.getText().toString();
        if(strToReverse.equals("")) clearInput(view);

        String reversed = new StringBuilder(strToReverse).reverse().toString();
        reversedPalindrome.setText(reversed);
    }

    public void compareStrings(View view) {
        String reversed = reversedPalindrome.getText().toString();
        String cleaned = cleanedPalindrome.getText().toString();


        if(reversed.equals("")) reverseInput(view);

        int wordLength = cleaned.length();

        styled_reversed = new SpannableString(reversed);
        styled_cleaned = new SpannableString(cleaned);

        iLoop = 0;
        Handler handler = new Handler();
        Runnable r = new Runnable() {
            @Override
            public void run() {
                if (iLoop >= wordLength) return;

                char cleanedChar = cleaned.charAt(iLoop);
                char reversedChar = reversed.charAt(iLoop);
                if(cleanedChar != reversedChar){
                    // paint red
                    styled_reversed.setSpan(new BackgroundColorSpan(Color.RED), iLoop, iLoop +1, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                    styled_cleaned.setSpan(new BackgroundColorSpan(Color.RED), iLoop, iLoop +1, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                } else {
                    // paint green
                    styled_reversed.setSpan(new BackgroundColorSpan(Color.GREEN), iLoop, iLoop +1, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                    styled_cleaned.setSpan(new BackgroundColorSpan(Color.GREEN), iLoop, iLoop +1, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                }

                reversedPalindrome.setText(styled_reversed);
                cleanedPalindrome.setText(styled_cleaned);
                iLoop++;
                handler.postDelayed(this, 100);
            }
        };
        handler.postDelayed(r, 100);

    }

    public void compareV2(View view){
        String cleaned = cleanedPalindrome.getText().toString();

        if(cleaned.equals("")) clearInput(view);

        int wordLength = cleaned.length();
        styled_cleaned = new SpannableString(cleaned);
        iLoop = 0;
        Handler handler = new Handler();
        Runnable r = new Runnable() {
            @Override
            public void run() {
                if (iLoop >= wordLength/2) return;

                int reversedIndex = wordLength - (iLoop +1);
                char cleanedChar = cleaned.charAt(iLoop);
                char reversedChar = cleaned.charAt(reversedIndex);
                if(cleanedChar != reversedChar){
                    // paint red
                    styled_cleaned.setSpan(new BackgroundColorSpan(Color.RED), iLoop, iLoop +1, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                    styled_cleaned.setSpan(new BackgroundColorSpan(Color.RED), reversedIndex, reversedIndex+1, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                } else {
                    // paint green
                    styled_cleaned.setSpan(new BackgroundColorSpan(Color.GREEN), iLoop, iLoop +1, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                    styled_cleaned.setSpan(new BackgroundColorSpan(Color.GREEN), reversedIndex, reversedIndex+1, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
                }

                cleanedPalindrome.setText(styled_cleaned);
                iLoop++;
                handler.postDelayed(this, 100);
            }
        };
        handler.postDelayed(r, 100);
    }

    public void adminLogin(View view) {
        Intent intent = new Intent(this, Auth.class);
        startActivityForResult(intent, 1);
    }

    public String getRandomPalindrome() throws IOException {
        ArrayList<String> listPalindrome = new ArrayList<String>();
        // readFile
        InputStream is = getApplicationContext().getAssets().open("palindromes.txt");
        BufferedReader br = new BufferedReader(new InputStreamReader(is, "ISO-8859-1"));
        // add to list
        String line;
        while((line = br.readLine() ) != null){
            listPalindrome.add(line);
        }
        // Random index
        int random = new Random().nextInt(listPalindrome.size());
        return listPalindrome.get(random);
    }

    public String getRandomMaybePalindrome() throws IOException {
        ArrayList<String> listPalindrome = new ArrayList<String>();
        // readFile
        InputStream is = getApplicationContext().getAssets().open("nonpalindromes.txt");
        BufferedReader br = new BufferedReader(new InputStreamReader(is, "ISO-8859-1"));
        // add to list
        String line;
        while((line = br.readLine() ) != null){
            listPalindrome.add(line);
        }
        // Random index
        int random = new Random().nextInt(listPalindrome.size());
        return listPalindrome.get(random);
    }
}