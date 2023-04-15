# Generated by Django 4.2 on 2023-04-15 21:59

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mwitu', '0004_alter_rating_stars'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='rating',
            field=models.PositiveSmallIntegerField(default=1, validators=[django.core.validators.MaxValueValidator(limit_value=5)]),
        ),
        migrations.DeleteModel(
            name='Rating',
        ),
    ]
