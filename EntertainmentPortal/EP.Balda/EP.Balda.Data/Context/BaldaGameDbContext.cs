﻿using EP.Balda.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EP.Balda.Data.Context
{
    public class BaldaGameDbContext : IdentityDbContext<PlayerDb, IdentityRole, string>
    {
        public BaldaGameDbContext(DbContextOptions<BaldaGameDbContext> options)
            : base(options: options)
        {
        }

        public DbSet<GameDb> Games { get; set; }
        
        public DbSet<MapDb> Maps { get; set; }

        public DbSet<CellDb> Cells { get; set; }

        public DbSet<WordDb> Words { get; set; }

        public DbSet<PlayerGame> PlayerGames { get; set; }

        public DbSet<PlayerWord> PlayerWords { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var gameEntity = modelBuilder.Entity<GameDb>();
            gameEntity.HasOne(g => g.Map).WithOne();

            var playerGameEntry = modelBuilder.Entity<PlayerGame>();
            playerGameEntry
            .HasKey(pg => new { pg.PlayerId, pg.GameId });
            modelBuilder.Entity<PlayerGame>()
                .HasOne(pg => pg.Player)
                .WithMany(pg => pg.PlayerGames)
                .HasForeignKey(pg => pg.PlayerId);
            modelBuilder.Entity<PlayerGame>()
                .HasOne(pg => pg.Game)
                .WithMany(pg => pg.PlayerGames)
                .HasForeignKey(pg => pg.GameId);

            var playerWordEntry = modelBuilder.Entity<PlayerWord>();
            playerWordEntry
            .HasKey(pw => new { pw.Id, pw.PlayerId, pw.WordId, pw.GameId });
            modelBuilder.Entity<PlayerWord>()
                .HasOne(pw => pw.Player)
                .WithMany(pw => pw.PlayerWords)
                .HasForeignKey(pw => pw.PlayerId);
            modelBuilder.Entity<PlayerWord>()
                .HasOne(pw => pw.Word)
                .WithMany(pw => pw.PlayerWords)
                .HasForeignKey(pw => pw.WordId);
            modelBuilder.Entity<PlayerWord>()
                .HasOne(pw => pw.Game)
                .WithMany(pw => pw.PlayerWords)
                .HasForeignKey(pw => pw.GameId);

            var mapEntity = modelBuilder.Entity<MapDb>();
            mapEntity.HasKey(m => m.Id);
            mapEntity.Property(m => m.Size).IsRequired();
            mapEntity.HasMany(m => m.Cells).WithOne();

            var cellEntity = modelBuilder.Entity<CellDb>();
            cellEntity.HasKey(c => c.Id);
            cellEntity.Property(c => c.X).IsRequired();
            cellEntity.Property(c => c.Y).IsRequired();
            cellEntity.HasOne(c => c.Map).WithMany(c => c.Cells).HasForeignKey(c => c.MapId);

            var wordEntity = modelBuilder.Entity<WordDb>();
            wordEntity.HasKey(w => w.Id);
            wordEntity.Property(w => w.Word).IsRequired();
        }
    }
}
