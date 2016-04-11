# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guitar', '0003_auto_20151122_1818'),
    ]

    operations = [
        migrations.RenameField(
            model_name='answer',
            old_name='txtChoice',
            new_name='txtAnswer',
        ),
    ]
