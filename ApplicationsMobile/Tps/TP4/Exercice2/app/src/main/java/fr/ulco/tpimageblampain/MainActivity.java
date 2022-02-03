package fr.ulco.tpimageblampain;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.drawable.BitmapDrawable;
import android.os.Build;
import android.os.Bundle;
import android.view.ContextMenu;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.PopupMenu;
import android.widget.TextView;

import java.io.InputStream;

public class MainActivity extends AppCompatActivity {

    static final Integer REQUEST_CODE_IMG = 2;
    private Bitmap bm;
    private ImageView img_container;
    private TextView img_url;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        img_container = findViewById(R.id.img_container);
        img_url = findViewById(R.id.img_url);

        registerForContextMenu(img_container);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu, menu);
        return true;
    }

    @Override
    public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
        super.onCreateContextMenu(menu, v, menuInfo);

        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.contextual, menu);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
        if(requestCode == REQUEST_CODE_IMG && resultCode == Activity.RESULT_OK){
            try {
                if(bm != null){
                    bm.recycle();
                }
                BitmapFactory.Options options = new BitmapFactory.Options();
                options.inMutable = true;
                bm = BitmapFactory.decodeStream(getContentResolver().openInputStream(intent.getData()), null, options);
                img_container.setImageBitmap(bm);
                img_url.setText(intent.getDataString());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        super.onActivityResult(requestCode, resultCode, intent);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        switch(id){
            case R.id.menu_flip_hor:
                reverse("horizontal");
                return true;
            case R.id.menu_flip_vert:
                reverse("vertical");
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }

    @Override
    public boolean onContextItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.menu_reverse_color:
                reverse_color();
                return true;
            case R.id.menu_grey_scale:
                return true;
            default:
                return super.onContextItemSelected(item);
        }
    }


    public void onClickUpload(View view){
        Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
        intent.setType("image/*");
        startActivityForResult(intent, REQUEST_CODE_IMG);
    }

    public void reverse(String direction){
        Bitmap bitmap = ((BitmapDrawable)img_container.getDrawable()).getBitmap();

        if(bitmap == null) return;

        int width = bitmap.getWidth() -1;
        int height = bitmap.getHeight() -1;


        switch(direction){
            case "horizontal":
                for(int row_i = 0; row_i < height /2; row_i++){
                    for(int col_i = 0; col_i < width; col_i++){
                        int pixelOrigin = bitmap.getPixel(width - col_i, height - row_i);
                        int pixelDest = bitmap.getPixel(col_i, row_i);
                        bitmap.setPixel(col_i, row_i, pixelOrigin);
                        bitmap.setPixel(width - col_i, height - row_i, pixelDest);
                    }
                }
                break;
            case "vertical":
                for(int row_i = 0; row_i < height; row_i++){
                    for(int col_i = 0; col_i < width/2; col_i++){
                        int pixelOrigin = bitmap.getPixel(width - col_i, row_i);
                        int pixelDest = bitmap.getPixel(col_i, row_i);
                        bitmap.setPixel(col_i, row_i, pixelOrigin);
                        bitmap.setPixel(width - col_i, row_i, pixelDest);
                    }
                }
                break;

            default: break;
        }

        img_container.setImageBitmap(bitmap);
    }


    public void reverse_color(){
        Bitmap bitmap = ((BitmapDrawable)img_container.getDrawable()).getBitmap();

        if(bitmap == null) return;

        int width = bitmap.getWidth() -1;
        int height = bitmap.getHeight() -1;

        for(int row = 0; row < height; row++){
            for(int col = 0; col < width/2; col++){
                int pixel = bitmap.getPixel(col, row);
                int red = Color.red(pixel);
                int green = Color.green(pixel);
                int blue = Color.blue(pixel);
                bitmap.setPixel(row, col, Color.rgb(255-red, 255-green, 255-blue));
            }
        }

        img_container.setImageBitmap(bitmap);
    }
}