# Generated by Django 3.0.4 on 2020-06-16 22:21

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('burners', '0002_auto_20200405_0051'),
    ]

    operations = [
        migrations.CreateModel(
            name='Analisis',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid5, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('burner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='burners.Burner')),
            ],
        ),
    ]
