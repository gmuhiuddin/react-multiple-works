import React, { useState } from 'react'

function LeafTossingGamePrototype() {

    const defaultIcons = [
        {
            image: "https://cdn-icons-png.flaticon.com/512/88/88506.png",
            name: "leave",
            isOpened: false,
            inProcessing: false,
            id: 1
        }, {
            image: "https://cdn-icons-png.flaticon.com/512/88/88506.png",
            name: "leave",
            isOpened: false,
            inProcessing: false,
            id: 2
        }, {
            image: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
            name: "candy",
            isOpened: false,
            inProcessing: false,
            id: 3
        }, {
            image: "https://cdn-icons-png.flaticon.com/512/9356/9356709.png",
            name: "candy",
            isOpened: false,
            inProcessing: false,
            id: 4
        }, {
            image: "https://cdn-icons-png.flaticon.com/512/384/384144.png",
            name: "bike",
            isOpened: false,
            inProcessing: false,
            id: 5
        }, {
            image: "https://cdn-icons-png.flaticon.com/512/384/384144.png",
            name: "bike",
            isOpened: false,
            inProcessing: false,
            id: 6
        },
    ];

    const [icons, setIcons] = useState(defaultIcons);

    function handleClickOnIcon(iconId) {

        const duplicateIcon = [...icons];

        const pacificIconIndex = icons.findIndex(icon => icon.id == iconId);
        const pacificIcon = duplicateIcon[pacificIconIndex];

        if (pacificIconIndex.isOpened) return;

        pacificIcon.inProcessing = true;

        setIcons(duplicateIcon);

        const iconsFromName = duplicateIcon.filter(icon => icon.name == pacificIcon.name);

        if (iconsFromName[0].inProcessing && iconsFromName[1].inProcessing) {

            iconsFromName.forEach(icon => {
                icon.inProcessing = false;

                icon.isOpened = true;
            });

            const leftIcons = duplicateIcon.filter(icon => icon.name != pacificIcon.name);

            setIcons([...leftIcons, ...iconsFromName]);
        } else {
            pacificIcon.inProcessing = true;

            setIcons(duplicateIcon);
        };

        setTimeout(() => {
            duplicateIcon.forEach(icon => {
                if (icon.name != pacificIcon.name && icon.inProcessing) {

                    const iconArr = [...duplicateIcon].map(icon => {
                        icon.inProcessing = false;

                        return { ...icon };
                    });

                    return setTimeout(() => {
                        setIcons(iconArr);
                    }, 100);
                };
            });
        }, 500);
    };

    return (
        <div>
            <div className='main-container'>

                {icons.map(icon => {

                    return (
                        <div onClick={() => handleClickOnIcon(icon.id)} className={`icon-container  ${!icon.isOpened && !icon.inProcessing && "closed-icon-container"}`}>
                            <img src={icon.image} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LeafTossingGamePrototype;