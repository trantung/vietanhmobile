<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalaryTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('salaries', function(Blueprint $table) {
            $table->increments('id');
            $table->string('salary', 256)->nullable();
            $table->string('description', 256)->nullable();
            $table->integer('status')->nullable();
            $table->integer('user_id')->nullable();
            $table->integer('dep_id')->nullable();
            $table->integer('regency_id')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('salaries');
	}

}
