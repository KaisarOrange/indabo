<script>
	export let color;

	let colorChoice =
		color === 1 ? 'bg-gradient-to-b from-indigo-900 to-black text-white' : 'bg-white text-black';

	const waGoto = (num) => {
		window.location.href = `https://wa.me/${num}`;
	};
</script>

<div class="{colorChoice} p-4 rounded-md md:w-1/2 px-10 m-auto mt-10 mb-10">
	<h2 class="font-bold text-2xl mb-10">Yuk, Hubungi kami</h2>
	<div class="flex justify-between items-center mb-5 flex-wrap">
		<div class="flex gap-2">
			<img class="w-20" src="/19.png" alt="" />
			<div>
				<h3 class="text-lg font-bold">Firdawati</h3>
				<p>08125436422</p>
				<p>firdawati@ijm.co.id</p>
			</div>
		</div>
		<button
			on:click={() => waGoto('08125436422')}
			class="bg-green-500 w-full justify-center lg:w-fit p-2 rounded-md h-10 font-bold flex items-center gap-1 text-white mt-3 md:mt-0"
			>Hubungi kami <span>
				<img class="w-5" src="/20.png" alt="" />
			</span>
		</button>
	</div>
	<div class="flex justify-between items-center mb-5 flex-wrap">
		<div class="flex gap-2">
			<img class="w-20" src="/17.png" alt="" />
			<div>
				<h3 class="text-lg font-bold">Siti Aisyah</h3>
				<p>083878127277</p>
				<p></p>
			</div>
		</div>
		<button
			on:click={() => waGoto('083878127277')}
			class="bg-green-500 w-full justify-center lg:w-fit p-2 rounded-md h-10 font-bold flex items-center gap-1 text-white mt-3 md:mt-0"
			>Hubungi kami <span>
				<img class="w-5" src="/20.png" alt="" />
			</span>
		</button>
	</div>
	<div class="flex justify-between items-center mb-5 flex-wrap">
		<div class="flex gap-2">
			<img class="w-20" src="/18.png" alt="" />
			<div>
				<h3 class="text-lg font-bold">Faisal</h3>
				<p>08115813013</p>
				<p>faisal@ijm.co.i</p>
			</div>
		</div>
		<button
			on:click={() => waGoto('08115813013')}
			class="bg-green-500 w-full justify-center lg:w-fit p-2 rounded-md h-10 font-bold flex items-center gap-1 text-white mt-3 md:mt-0"
			>Hubungi Kami <span>
				<img class="w-5" src="/20.png" alt="" />
			</span>
		</button>
	</div>
</div>
