<script lang="ts">
	import MediaQuery from '$lib/MediaQuery.svelte';
	import { fade } from 'svelte/transition';

	let menuOpen = false;
</script>

<!-- TODO put something else here? github link? -->
<div class="corner">
	<MediaQuery query="(max-width: 690px)" let:matches>
		{#if matches}
			<!-- Hamburger Menu -->
			<div class="menuToggle" transition:fade="{{ duration: 200 }}" on:outrostart="{() => (menuOpen = false)}">
				<input type="checkbox" bind:checked="{menuOpen}" />
				<span></span>
				<span></span>
				<span></span>
			</div>

			{#if menuOpen}
				<!-- <div transition:customSlide="{{}}" class="mobile-menu backdrop-blur-sm">
                <h1>Hi</h1>
            </div> -->
				<!-- TODO : 
https://sveltematerialui.com/demo/drawer/
Use this instead :  A modal drawer with header, activated items, subheading, icons, list groups
-->
				<!-- <Drawer bind:open="{menuOpen}">
                <Content>
                    <List>
                        <Item href="javascript:void(0)" on:click="{() => {}}">
                            <Text>Gray Kittens</Text>
                        </Item>
                        <Item href="javascript:void(0)" on:click="{() => {}}">
                            <Text>A Space Rocket</Text>
                        </Item>
                        <Item href="javascript:void(0)" on:click="{() => {}}">
                            <Text>100 Pounds of Gravel</Text>
                        </Item>
                        <Item href="javascript:void(0)" on:click="{() => {}}">
                            <Text>All of the Shrimp</Text>
                        </Item>
                        <Item href="javascript:void(0)" on:click="{() => {}}">
                            <Text>A Planet with a Mall</Text>
                        </Item>
                    </List>
                </Content>
            </Drawer> -->
			{/if}
		{/if}
	</MediaQuery>
</div>

<style>
	div.menuToggle {
		position: relative;
		height: 1rem;
	}

	div.menuToggle input {
		display: block;
		width: 40px;
		height: 32px;
		position: absolute;
		top: -7px;
		left: -5px;

		cursor: pointer;

		opacity: 0; /* hide this */
		z-index: 2; /* and place it over the hamburger */

		-webkit-touch-callout: none;
	}

	/*
 * Just a quick hamburger
 */
	div.menuToggle span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;

		background: var(--secondary);
		border-radius: 3px;

		z-index: 1;

		transform-origin: 4px 0px;

		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
	}

	div.menuToggle span:first-child {
		transform-origin: 0% 0%;
	}

	div.menuToggle span:nth-of-type(3) {
		transform-origin: 0% 100%;
	}

	/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
	div.menuToggle input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-2px, -1px);
		background: var(--secondary);
	}

	/*
 * But let's hide the middle one.
 */
	div.menuToggle input:checked ~ span:nth-of-type(2) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	/*
 * Ohyeah and the last one should go the other direction
 */
	div.menuToggle input:checked ~ span:nth-of-type(3) {
		transform: rotate(-45deg) translate(0, -1px);
	}

	/* Corner Right - Hamburger Menu */
	div.corner {
		display: flex;
		align-items: center;
	}
</style>
