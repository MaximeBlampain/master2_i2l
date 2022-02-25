package fr.ulco.testimplicite;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    private final int PERMISSION_SMS = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onClick(View view){
        Intent intent;
        switch(view.getId()){
            case R.id.btn_sms:
                Uri sms = Uri.parse("sms:0607080910?body=Welcome to AndroidStudio");
                intent = new Intent(Intent.ACTION_SENDTO, sms);
                startActivity(intent);
                break;
            case R.id.btn_mms:
                String imageUrl = "src/main/ressources/hercule.png";
                Uri mms = Uri.parse("mms:0607080910?body=Welcome to AndroidStudio");
                intent = new Intent(Intent.ACTION_SENDTO, mms);
                intent.putExtra(Intent.EXTRA_STREAM, Uri.parse("content://" + imageUrl));
                intent.setType("image/png");
                startActivity(intent);
                break;
            case R.id.btn_call:
                Uri call = Uri.parse("tel:0607080910");
                intent = new Intent(Intent.ACTION_DIAL, call);
                startActivity(intent);
                break;
            case R.id.btn_web:
                Uri web = Uri.parse("http://www-lisic.univ-littoral.fr");
                intent = new Intent(Intent.ACTION_VIEW, web);
                startActivity(intent);
                break;
            case R.id.btn_map:
                Uri map = Uri.parse("geo:0,0?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA+94043");
                intent = new Intent(Intent.ACTION_VIEW, map);
                startActivity(intent);
                break;
        }

    }
}