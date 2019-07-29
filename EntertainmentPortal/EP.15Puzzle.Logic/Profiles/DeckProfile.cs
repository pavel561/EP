﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using EP._15Puzzle.Data.Models;
using EP._15Puzzle.Logic.Models;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace EP._15Puzzle.Logic.Profiles
{
    public class DeckProfile:Profile
    {
        public DeckProfile()
        {
            CreateMap<LogicDeck, DeckDb>().ReverseMap();
            CreateMap<UserDb, User>();
            CreateMap<LogicDeck, Deck>()
                .ForMember(d => d.Tiles, opt => opt.MapFrom(f => ConvertTiles(f.Tiles, f.Size)));
            CreateMap<DeckDb, Deck>()
                .ForMember(d=>d.Tiles, opt=>opt.MapFrom(f =>  ConvertTiles(f.Tiles,f.Size)));
            CreateMap<LogicTile, Tile>();
            CreateMap<TileDb, LogicTile>()
                .ForMember(t => t.NearbyTiles, opt => opt.Ignore());
            CreateMap<RecordDb, Record>()
                .ForMember(r=>r.Name,opt=>opt.MapFrom(c=>c.User.Name))
                .ForMember(r=>r.Country, opt => opt.MapFrom(c => c.User.Country))
                .ForMember(r=>r.Score, opt => opt.MapFrom(c => c.Score));

            

            
        }

        private Tile[,] ConvertTiles(ICollection<TileDb> tiles, int size)
        {
            var tilesInRows = new Tile[size,size];
            int i = 0;
            foreach (var tile in tiles)
            {
                tilesInRows[i / size, i % size] = new Tile(){Num = tile.Num, Pos = tile.Pos};
                i++;
            }
            
            return tilesInRows;
        }
        private Tile[,] ConvertTiles(ICollection<LogicTile> tiles, int size)
        {
            var tilesInRows = new Tile[size, size];
            int i = 0;
            foreach (var tile in tiles)
            {
                tilesInRows[i / size, i % size] = new Tile() { Num = tile.Num, Pos = tile.Pos };
                i++;
            }

            return tilesInRows;
        }
    }
}
