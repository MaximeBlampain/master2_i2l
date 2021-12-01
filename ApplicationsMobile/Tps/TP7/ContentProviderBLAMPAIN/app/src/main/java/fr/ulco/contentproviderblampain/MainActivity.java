package fr.ulco.contentproviderblampain;

import androidx.appcompat.app.AppCompatActivity;

import android.content.ContentResolver;
import android.database.Cursor;
import android.os.Bundle;
import android.provider.UserDictionary;
import android.view.View;

import com.google.android.material.snackbar.Snackbar;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onClickOpenDictionnary(View view) {
        ContentResolver resolver = getContentResolver();
        Cursor mCursor = resolver.query(
                UserDictionary.Words.CONTENT_URI,
                null,
                null,
                null,
                null
                );
        mCursor.moveToFirst();
        while(!mCursor.isAfterLast()) {
            Snackbar.make(view, mCursor.getString(mCursor.getColumnIndex(UserDictionary.Words.WORD)), Snackbar.LENGTH_LONG)
                    .setAction("Action", null).show();
            mCursor.moveToNext();
        }
    }
}