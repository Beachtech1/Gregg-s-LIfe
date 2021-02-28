// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = false

onEvent('recipes', event => {

event.remove({id: 'minecraft:furnace'})


event.shaped('minecraft:furnace', [
   	 'CCC',
   	 'C C',
    	 'SSS'
	], {
   	 C: '#forge:cobblestone',
   	 S: 'minecraft:smooth_stone',
	})


event.remove({id: 'waterstriners:striner_base'})
event.shaped('waterstrainer:strainer_base', [
   	 'F F',
   	 'WHW',
    	 'WCW'
	], {
   	 W: 'minecraft:oak_planks',
   	 C: 'minecraft:chest',
         H: 'woodenhopper:wooden_hopper',
	 F: 'minecraft:oak_fence',
	})

event.remove({id: 'minecraft:campfire'})
event.shaped('minecraft:campfire', [
   	 ' S ',
   	 'SLS',
    	 'LLL'
	], {
   	 L: 'minecraft:oak_log',
   	 S: 'minecraft:stick',
	})


event.remove({id: 'create:crushing_wheel'})
event.shaped('create:crushing_wheel', [
   	 'AAA',
   	 'AMA',
    	 'AAA'
	], {
   	 A: 'create:andesite_alloy',
   	 M: 'create:mechanical_bearing',
	})

event.remove({output: 'minecraft:iron_ingot', type: 'minecraft:smelting'})
event.remove({output: 'minecraft:gold_ingot', type: 'minecraft:smelting'})
event.remove({output: 'minecraft:iron_ingot', type: 'minecraft:blasting'})
event.remove({output: 'minecraft:gold_ingot', type: 'minecraft:blasting'})

event.recipes.minecraft.campfire_cooking('ceramics:clay_bucket', 'ceramics:unfired_clay_bucket')

event.recipes.minecraft.campfire_cooking('realistictorches:lit_torch', 'realistictorches:unlit_torch')
})
