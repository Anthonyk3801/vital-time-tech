import React, { startTransition, useEffect } from 'react';
import { DndContext } from '../../node_modules/@dnd-kit/core/dist/index';
import './globals.css'

export default function Page() {
  
  return (
    <html>
      <head>
      </head>
      <body>
        <ul class="sortable">
          <li class='item' draggable='true'>
            <div class="details">
              <img src="https://blogimages.musement.com/2020/08/Luskentyre-Beach-Isle-of-Harris-Scotland-scaled.jpeg"></img>
              <div class="under">
              <h2>Scotland Island</h2>
              <p>Sydney, Australia</p>
              </div>
            </div>
          </li>
          <li class='item' draggable='true'>
            <div class="details">
              <img src="https://cdn.broadsheet.com.au/cache/b7/e9/b7e98c8b393dab6a0121ff9cbf22a50a.jpg"></img>
              <div class="under">
              <h2>The Charles Grand Brasserie & Bar</h2>
              <p>Lorem ipsum, Dolor</p>
              </div>
            </div>
          </li>
          <li class='item' draggable='true'>
            <div class="details">
              <img src="https://media.cntraveler.com/photos/53da90d9dcd5888e145bd22b/master/pass/sydney-harbor-bridge-climb-wendy-perrin.jpg"></img>
              <div class="under">
              <h2>Bridge Climb</h2>
              <p>Dolor, Sit amet</p>
              </div>
            </div>
          </li>
          <li class='item' draggable='true'>
            <div class="details">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqmKfoWa00h8Sic55a6Ut62KJloDvzzjWCQ&s"></img>
              <div class="under">
              <h2>Scotland Island</h2>
              <p>Sydney, Australia</p>
              </div>
            </div>
          </li> 
          <li class='item' draggable='true'>
            <div class="details">
              <img src="https://www.localsyr.com/wp-content/uploads/sites/63/2023/11/the-clam-bar.jpg?w=1280"></img>
              <div class="under">
              <h2>Clam Bar</h2>
              <p>Etcetera veni, Vidi vici</p>
              </div>
            </div>
          </li>
          <li class='item' draggable='true'>
            <div class="details">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJeWm9-9pMstFGvhh72nMUlOy-ZRGY-0ZAA&s"></img>
              <div class="under">
              <h2>Vivid Festival</h2>
              <p>Sydney, Australia</p>
              </div>
            </div>
          </li>                  
        </ul>
      </body>
    </html>
  )
}

