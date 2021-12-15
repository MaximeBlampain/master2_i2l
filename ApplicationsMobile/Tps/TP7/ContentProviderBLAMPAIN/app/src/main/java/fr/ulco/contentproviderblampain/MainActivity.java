package fr.ulco.contentproviderblampain;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.ContentResolver;
import android.database.Cursor;
import android.os.Bundle;
import android.provider.UserDictionary;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Switch;

import com.google.android.material.snackbar.Snackbar;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private Switch switchSort;
    private ArrayList<String> listItemDico = new ArrayList<String>();;
    private ArrayAdapter<String> adapterListItemDico;
    private ListView listViewDico;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        adapterListItemDico = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_checked, listItemDico);
        listViewDico = (ListView) findViewById(R.id.listViewDico);
        listViewDico.setAdapter(adapterListItemDico);

        switchSort = findViewById(R.id.switchSort);
        switchSort.setShowText(true);
        switchSort.setTextOn("ASC");
        switchSort.setTextOff("DESC");
    }

    public void onClickGetDictionnary(View view) {
        ContentResolver resolver = getContentResolver();
        Cursor mCursor = resolver.query(
                UserDictionary.Words.CONTENT_URI,
                null,
                null,
                null,
                null
                );

        Boolean switchValue = switchSort.isChecked();
        alphabeticalOrder(mCursor, switchValue);
        mCursor.close();
    }

    private void alphabeticalOrder(Cursor c, Boolean isAsc) {
        listItemDico.clear();
        if (isAsc) {
            // Display Sort in alphabetic order
            c.moveToLast();
            while(!c.isBeforeFirst()){
                int colIndex = c.getColumnIndex(UserDictionary.Words.WORD);
                if(colIndex >= 0){
                    String word = c.getString(colIndex);
                    listItemDico.add(word);
                    System.out.println(word);
                }
                c.moveToPrevious();
            }
        } else {
            // Display Sort in reverse-alphabetic order
            c.moveToFirst();
            while(!c.isAfterLast()) {
                int colIndex = c.getColumnIndex(UserDictionary.Words.WORD);
                if(colIndex >= 0){
                    String word = c.getString(colIndex);
                    listItemDico.add(word);
                    System.out.println(word);
                }
                c.moveToNext();
            }
        }

        adapterListItemDico.notifyDataSetChanged();
        c.close();
    }
}