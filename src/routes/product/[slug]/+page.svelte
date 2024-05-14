<script>
	import Contact from '$lib/Components/Contact.svelte';
	import { fade } from 'svelte/transition';
	export let data;

	const title = [
		'Turbocharger',
		'GEAR BOX & TRANSMISSIONS',
		'HYDRAULIC PUMPS & ACCESORIES',
		'AXLE & ACCESORIES'
	];

	const desc = [
		'Our Turbocharger facility provides a modern clean environment, for the repair of all makes of Turbochargers. All Turbochargers are cleaned, inspected and rebuilt to OEM specifications and rotating assemblies are balanced using the latest computerized balancing equipment.',
		'We repair Gear Boxes & Transmissions for application in Heavy equipment, Oil and Gas Industry, all with genuine parts and for the lower cost. With our continuing commitment to the highest quality after sales care, we also offer a full 6 month or 3000 hours guarantee period on all work carried out.',
		'We repair HYDRAULIC PUMP for application in Heavy equipment, Oil and Gas Industry, all with genuine parts and for the lower cost. With our continuing commitment to the highest quality after sales care, we also offer a full 6 month or 3000 hours guarantee period on all work carried out.',
		'We repair Axles & Accessories for application in Heavy equipment, Oil and Gas Industry, all with genuine parts and for the lower cost. With our continuing commitment to the highest quality after sales care, we also offer a full 6 month or 3000 hours guarantee period on all work carried out.'
	];

	const imageProducts = [
		['/turbo1.png', '/turbo2.png', '/turbo3.png', '/turbo4.png'],
		['/9.png', '/10.png'],
		['/11.png', '/12.png', '/13.png', '/24.png'],
		['/14.png', '/15.png']
	];
	const imageProduct = ['/turboBrand.png', '/gearbox.png', '/hydraulic.png', '/axle.png'];
	const productList = [
		[
			'Komatsu',
			'Caterpillar',
			'Holset',
			'Garrett',
			'BorgWarners',
			'Toyota',
			'KKK',
			'IHI',
			'Schwitzer'
		],
		[
			'TWIN DISC',
			'ZF',
			'ALLISON',
			'VOLVO TRUCK',
			'IVECO',
			'MERCEDES TRUCK',
			'VOLVO CONSTRUCTION',
			'DANA',
			'KALMAR',
			'MANITOU',
			'SCANIA',
			'TEREX'
		],
		['KAWASAKI HYDRAULIC', 'REXROTH HYDRAULIC', 'GEARTEK', 'DENNISON', 'VICKER', 'SUNFAB'],
		[
			'MERITOR',
			'DANA',
			'AXLETECH',
			'CARRARO',
			'VOLVO TRUCK',
			'IVECO TRUCK',
			'MERCEDES TRUCK',
			'VOLVO CONSTRUCTION',
			'SCANIA TRUCK '
		]
	];
</script>

<div transition:fade={{ delay: 250, duration: 300 }}>
	<div
		class="bg-[url('/41.png')] flex flex-col items-center px-2 md:px-10 pb-20 gap-10 py-10 min-h-screen text-white"
	>
		<h1 class="font-bold text-3xl">{title[data.slug]}</h1>
		<p class="text-justify md:w-1/2">
			{desc[data.slug]}
		</p>
		<div
			class="bg-slate-200 bg-opacity-30 flex gap-4 p-2 md:p-8 rounded-md flex-wrap justify-center"
		>
			{#each imageProducts[data.slug] as product}
				<img class="w-40 h-32 md:w-52 md:h-40 rounded-md bg-white" src={product} alt="" />
			{/each}
		</div>
	</div>
	<div class="bg-white mt-0 font-bold p-4 py-12">
		<h2 class="mb-10 text-center text-4xl">Merek {title[data.slug]} Kami</h2>
		<img class="md:w-1/3 m-auto" src={imageProduct[data.slug]} alt="" />
		<h3 class="text-lg text-center mt-10">Product list:</h3>
		{#each productList[data.slug] as product}
			<h3 class="text-center">{product}</h3>
		{/each}
	</div>
	<div class="bg-[url('/grup1.png')] py-4">
		<Contact color={2} />
	</div>
</div>
