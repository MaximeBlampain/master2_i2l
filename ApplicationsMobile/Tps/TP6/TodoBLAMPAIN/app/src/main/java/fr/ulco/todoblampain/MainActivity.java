package fr.ulco.todoblampain;

import android.content.Intent;
import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Environment;
import android.util.Log;
import android.util.SparseBooleanArray;
import android.view.View;

import androidx.appcompat.widget.Toolbar;

import android.view.Menu;
import android.view.MenuItem;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    public final static String Ref = "fr.ulco.todoblampain.Ref";
    ArrayList<String> todoList = new ArrayList<String>();
    ArrayAdapter<String> todoListAdapter;
    ListView listViewItems;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        todoListAdapter = new ArrayAdapter<String>(this,android.R.layout.simple_list_item_checked, todoList);
        listViewItems = (ListView) findViewById(R.id.listViewItems);

        listViewItems.setAdapter(todoListAdapter);

        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                addTodo(view);
            }
        });

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
    }

    public void addTodo(View view) {
        Intent intention = new Intent(this, NewTodo.class);
        startActivityForResult(intention, 300);
    }
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(resultCode == RESULT_OK){
            todoList.add(data.getStringExtra(Ref));
            todoListAdapter.notifyDataSetChanged();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();
        if (id == R.id.delete_checked) {
            deleteCheckedItems();
            return true;
        } else if (id == R.id.export_checked) {
            exportList();
            return true;
        }
        return super.onOptionsItemSelected(item);
    }


    public void exportList(){
        File root = new File(Environment.getExternalStorageDirectory()+File.separator+"Documents");
        Log.e("write",root.getPath());
        File sdCardFile = new File(root, "listViewItems.txt");
        try {
            FileWriter out = new FileWriter(sdCardFile);
            int count = todoListAdapter.getCount();
            for (int i = count-1; i >= 0; i--){
                out.write(todoListAdapter.getItem(i)+"\n");

            }
            out.flush();
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void deleteCheckedItems(){
        int count = todoListAdapter.getCount();
        SparseBooleanArray check = listViewItems.getCheckedItemPositions();

        for (int i = count-1; i >= 0; i--){
            if(check.get(i)){
                todoListAdapter.remove(todoListAdapter.getItem(i));
            }
        }
    }

}