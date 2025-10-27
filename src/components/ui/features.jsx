import React from 'react'

import "./features.css"
import { MdOutlineAutorenew } from "react-icons/md";
import { MdStoreMallDirectory } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { MdSettingsBackupRestore } from "react-icons/md";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import { MdOutlinePower } from "react-icons/md";

function features() {
  return (
    <>
    <section class="services">
    <div class="service-card">
      <div class="icon"><span class="material-symbols-outlined"><MdOutlineAutorenew />
</span></div>
      <h3>Marketing Consulting</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
      <a href="#">Learn More</a>
    </div>

    <div class="service-card">
      <div class="icon"><span class="material-symbols-outlined"><MdStoreMallDirectory /></span></div>
      <h3>Market Analysis</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
      <a href="#">Learn More</a>
    </div>

    <div class="service-card">
      <div class="icon"><span class="material-symbols-outlined"><CiShoppingBasket /></span></div>
      <h3>Easy Purchase</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
      <a href="#">Learn More</a>
    </div>

    <div class="service-card">
      <div class="icon"><span class="material-symbols-outlined"><MdSettingsBackupRestore /></span></div>
      <h3>Free Updates</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
      <a href="#">Learn More</a>
    </div>

    <div class="service-card">
      <div class="icon"><span class="material-symbols-outlined"><MdSentimentSatisfiedAlt /></span></div>
      <h3>100% Satisfied</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
      <a href="#">Learn More</a>
    </div>

    <div class="service-card">
      <div class="icon"><span class="material-symbols-outlined"><MdOutlinePower /></span></div>
      <h3>Easy Plugin</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
      <a href="#">Learn More</a>
    </div>
  </section>

    </>
  )

}

export default features

