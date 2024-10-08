# Generated by Django 5.1 on 2024-08-31 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_subtitle_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subtitle',
            name='file',
            field=models.FileField(upload_to='media/subtitles/'),
        ),
        migrations.AlterField(
            model_name='subtitle',
            name='thumbnail',
            field=models.FileField(default=False, upload_to='media/thumbnail/'),
        ),
    ]
