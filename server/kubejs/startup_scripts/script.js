WorldgenEvents.add((event) => {
    const {anchors} = event;
// Mercury ores

    event.addOre((ore) => {
        ore.id = "kubejs:mercurycaloriteore";
        ore.biomes = [
            "ad_astra:mercury_deltas",
            "biomesoplenty:withered_abyss",
            "biomesoplenty:erupting_inferno",
            "biomesoplenty:undergrowth",
            "biomesoplenty:crystalline_chasm",
            "biomesoplenty:visceral_heap",
        ];
        ore.addTarget(
            "#ad_astra:mercury_ore_replaceables",
            "ad_astra:deepslate_calorite_ore"
        );
        ore
            .count([10, 15])
            .squared()
            .triangleHeight(anchors.aboveBottom(64), anchors.absolute(25));
        ore.noSurface = 0.6;
        ore.size = 5;
    });

// Venus ores

    event.addOre((ore) => {
        ore.id = "kubejs:venuscaloriteore";
        ore.biomes = [
            "ad_astra:infernal_venus_barrens",
            "ad_astra:venus_wastelands",
            "byg:embur_bog",
            "byg:sythian_torrids",
            "byg:warped_desert",
            "byg:quartz_desert",
            "byg:brimstone_caverns",
            "byg:weeping_mire",
            "byg:magma_wastes",
            "byg:wailing_garth",
            "byg:crimson_gardens",
        ];
        ore.addTarget(
            "#ad_astra:venus_ore_replaceables",
            "ad_astra:deepslate_calorite_ore"
        );
        ore
            .count([12, 18])
            .squared()
            .triangleHeight(anchors.aboveBottom(64), anchors.absolute(25));
        ore.noSurface = 0.6;
        ore.size = 5;
    });
});

