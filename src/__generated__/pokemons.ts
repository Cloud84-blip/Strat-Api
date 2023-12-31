/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: QkpM+xHrwIUXE7M3oL+zA0YvljNcPcG7IwGuZGw/xA4eEAmsN8+8lIyg5LjWKhUX3FrboKgQj3ZXuJ/el8RTZg==
 */

/* eslint-disable */
// tslint:disable

interface Pokemons {
  _type: (string) | null
  default_sprite: (string) | null
  /**
   * @default nextval('pokemons_id_seq'::regclass)
   */
  id: number & {readonly __brand?: 'pokemons_id'}
  moves: (Array<string | null>) | null
  name_en: (string) | null
  name_fr: (string) | null
}
export default Pokemons;

interface Pokemons_InsertParameters {
  _type?: (string) | null
  default_sprite?: (string) | null
  /**
   * @default nextval('pokemons_id_seq'::regclass)
   */
  id?: number & {readonly __brand?: 'pokemons_id'}
  moves?: (Array<string | null>) | null
  name_en?: (string) | null
  name_fr?: (string) | null
}
export type {Pokemons_InsertParameters}