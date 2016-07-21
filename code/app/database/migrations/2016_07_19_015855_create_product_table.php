<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('products', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('parent_id')->nullable();
            $table->integer('type_id')->nullable();
            $table->string('color', 256)->nullable();
            $table->string('name', 256)->nullable();
            $table->string('short_des', 256)->nullable();
            $table->text('description')->nullable();
            $table->string('link_youtube', 256)->nullable();
            $table->string('price', 256)->nullable();
            $table->string('size', 256)->nullable();
            $table->string('pixel', 256)->nullable();
            $table->string('operate', 256)->nullable();
            $table->string('chip', 256)->nullable();
            $table->string('ram', 256)->nullable();
            $table->string('camera_front', 256)->nullable();
            $table->string('camera_back', 256)->nullable();
            $table->string('memory', 256)->nullable();
            $table->string('pin', 256)->nullable();
            $table->string('image_url', 256)->nullable();
            $table->string('weight_number', 256)->nullable();
            $table->integer('status')->nullable();
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
		Schema::drop('products');
	}

}
