"""update

Revision ID: 03e55ed3e858
Revises: 5e629ba5c3c8
Create Date: 2022-08-13 10:41:38.008004

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '03e55ed3e858'
down_revision = '5e629ba5c3c8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('vadmin_auth_menu', sa.Column('disabled', sa.Boolean(), nullable=True, comment='是否禁用'))
    op.drop_column('vadmin_auth_menu', 'status')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('vadmin_auth_menu', sa.Column('status', mysql.TINYINT(display_width=1), autoincrement=False, nullable=True, comment='是否可用'))
    op.drop_column('vadmin_auth_menu', 'disabled')
    # ### end Alembic commands ###
