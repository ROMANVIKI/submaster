# Generated by Django 5.1 on 2024-08-31 06:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_subtitle_file_alter_subtitle_thumbnail'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subtitle',
            name='file',
            field=models.FileField(upload_to='subtitles/'),
        ),
        migrations.AlterField(
            model_name='subtitle',
            name='thumbnail',
            field=models.FileField(upload_to='thumbnail/'),
        ),
    ]
