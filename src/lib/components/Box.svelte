<div class="box">
	<slot>
		<p>Default Slot</p>
	</slot>
	<slot name="title" />
	<slot name="content" />
</div>

<style>
	.box {
		border: 1px solid blue;
	}
</style>
