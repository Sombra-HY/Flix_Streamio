import { PhotoFrame } from '../PhotoFrame/PhotoFrame';
import React from 'react';

export const ActorsList = ({ list }) => {
    return (
        <section className="container-actors">
            <div className="listActor">
                {list.map((acthor) => {
                    const { name, profile_path } = acthor;
                    return !name || !profile_path ? null : (
                        <PhotoFrame key={`Acthor${acthor.id}`} photo={acthor} />
                    );
                })}
            </div>
        </section>
    );
};
