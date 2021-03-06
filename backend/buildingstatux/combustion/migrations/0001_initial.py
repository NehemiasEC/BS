# Generated by Django 3.0.4 on 2020-06-16 20:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('burners', '0002_auto_20200405_0051'),
    ]

    operations = [
        migrations.CreateModel(
            name='CombustionAnalysisTest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('stack_temperature', models.DecimalField(decimal_places=2, max_digits=5)),
                ('carbon_dioxide', models.DecimalField(decimal_places=2, max_digits=4)),
                ('efficiency', models.DecimalField(decimal_places=2, max_digits=4)),
                ('excess_air', models.DecimalField(decimal_places=2, max_digits=2)),
                ('oxigen', models.DecimalField(decimal_places=2, max_digits=4)),
                ('carbon_monoxide', models.DecimalField(decimal_places=2, max_digits=4)),
                ('burner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Burner', to='burners.Burner')),
            ],
        ),
    ]
